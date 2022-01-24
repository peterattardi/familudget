from decimal import Decimal
import json
from .models import Category, ExpenseItem
from .serializers import CategorySerializer, ExpenseItemSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.db.models import Sum
from rest_framework import status
from rest_framework.views import APIView

# Create your views here.

def fromNumberToString(yyyymm):
    '''
    Takes a pk of the form 'yyyy-mm'
    If 'mm' is a two digit number (11,12) returns it as it is
    If 'mm' is a one digit number (1,..,9) appends a 0 at the beginning 
    '''
    if yyyymm[-2] == "-":
        return yyyymm[:4]+ "-0"+yyyymm[-1]
    else:
        return yyyymm

def fromStringToNumber(number):
    '''
    Takes a two character string representin a one digit number (01,...,09)
    Returns a one digit number
    '''
    if number[-2] == "0":
        return number[-1]
    else:
        return number







class ExpensesList(APIView):
    '''
    List all the expenses for a particular month or post a new one
    '''
    

    def get(self, request, pk):
        '''
        Return a list of objects in which the first field is a day of the month and
        the second field is a list of expenses of that day
        Days are in desc order
        [
            {
                'day': 31,
                'expenses: {
                    {
                        ...
                    }
                }
            }
            ...
        ]
        '''
        pk = fromNumberToString(pk)
        expensesOfTheMonth = ExpenseItem.objects.filter(date__year = pk[:4],date__month = pk[-2:]).order_by('-date')
        serializer = ExpenseItemSerializer(expensesOfTheMonth, many = True)
        data = {}
        for object in serializer.data:
            if object['date'][-2:] in data.keys():
                data[object['date'][-2:]].append(object)
            else:
                data[object['date'][-2:]] = []
                data[object['date'][-2:]].append(object)
        response = []
        for dic in data:
            response.append({
                'day': fromStringToNumber(dic),
                'expenses': data[dic]
            })
        return Response(response)


    def post(self, request):
        '''
        Posts a new expense 
        If a category is not provided the total must be a positive numer: only
        negative expenses belong to a category
        '''
        errorMessage = {
            "code": 400,
            "message": "Category only accepted if amount is negative"
        }
        if "category" not in request.data.keys() and request.data["total"] < 0:
            return Response(data= json.dumps(errorMessage), status=status.HTTP_400_BAD_REQUEST)
        serializer = ExpenseItemSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

class ExspenseDetail(APIView):

    def get(self, request, pk):
        try:
            expense = ExpenseItem.objects.get(id=pk)
            serializer = ExpenseItemSerializer(expense, many=False)
            return Response(serializer.data)
        except:
            return Response({'error':'Item not found'}, status=status.HTTP_400_BAD_REQUEST)
        

    def put(self, request, pk):
        old_expense = ExpenseItem.objects.get(id=pk)
        new_expense = request.data
        serializer = ExpenseItemSerializer(instance=old_expense, data=new_expense, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
        return Response({"success": "Item '{}' updated successfully".format(new_expense['id'])})
    
    def delete(self, request, pk):
        try:
            ExpenseItem.objects.get(id=pk).delete()
            return Response({"success": "Item '{}' removed successfully".format(pk) })
        except:
            return Response({'error':'Item not found'}, status=status.HTTP_400_BAD_REQUEST)





@api_view(['GET'])
def getCategories(request):
    if request.method == 'GET':
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many = True)
        return Response(serializer.data)

@api_view(['GET'])
def getTotalsPerMonth(request,pk):
    '''
    Returns total loss and gain for a single month
    '''
    pk = fromNumberToString(pk)
    expenses = ExpenseItem.objects.filter(date__year = pk[:4],date__month = pk[-2:])
    serializer = ExpenseItemSerializer(expenses, many = True)
    totalIn = 0
    totalOut = 0
    for object in serializer.data:
        total = float(object['total'])
        if total > 0:
            totalIn += total
        else:
           totalOut -= total
    return Response({'total_in': totalIn, 'total_out': -1*totalOut})

@api_view(['GET'])
def getTotalsPerCategoryPerMonth(request,pk):
    pk = fromNumberToString(pk)
    expenses = ExpenseItem.objects.values('category').filter(date__year = pk[:4],date__month = pk[-2:], total__lt = Decimal(0)).order_by('category').annotate(total_sum=Sum('total')).order_by('total_sum')
    expensesList = list(expenses)
    return Response(expensesList)









