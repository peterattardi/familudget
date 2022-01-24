from django.contrib import admin
from .models import Category, ExpenseItem

# Register your models here.

admin.site.register(ExpenseItem)
admin.site.register(Category)
