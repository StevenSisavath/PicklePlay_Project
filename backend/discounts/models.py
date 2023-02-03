from django.db import models

# Create your models here.
class Discount(models.Model):
    discount_type = models.CharField(max_length=100)
    discount_total = models.FloatField(max_length=10)