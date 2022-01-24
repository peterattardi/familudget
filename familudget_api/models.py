from datetime import date
from django.db import models
from django.conf import settings

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=25, null=False, blank=False)

    def __str__(self):
        return self.name


class ExpenseItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, blank=True, null=True)
    description = models.CharField(max_length=255)
    total = models.DecimalField(decimal_places=2, max_digits=10)
    date = models.DateField(default=date.today)

    def __str__(self):
        return self.description
