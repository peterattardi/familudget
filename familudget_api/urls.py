from django.urls import path
from . import views

urlpatterns = [
    path('categories/',  views.getCategories),
    path('expenses/', views.ExpensesList.as_view()),
    path('expenses/<str:id>/<str:pk>', views.ExpensesList.as_view()), 
    path('totals/<str:id>/<str:pk>', views.getTotalsPerMonth),
    path('totals-per-category/<str:id>/<str:pk>', views.getTotalsPerCategoryPerMonth),
    path('expense/<str:id>/<str:pk>', views.ExspenseDetail.as_view()),
]
