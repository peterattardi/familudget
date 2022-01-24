from django.urls import path
from . import views

urlpatterns = [
    path('categories/',  views.getCategories),
    path('expenses/<str:pk>', views.ExpensesList.as_view()),
    path('expenses/', views.ExpensesList.as_view()),
    path('totals/<str:pk>', views.getTotalsPerMonth),
    path('totals-per-category/<str:pk>', views.getTotalsPerCategoryPerMonth),
    path('expense/<str:pk>', views.ExspenseDetail.as_view()),
]
