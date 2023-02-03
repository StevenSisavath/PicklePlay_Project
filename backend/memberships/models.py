from django.db import models
from discounts.models import Discount

# Create your models here.
class Membership(models.Model):
    member_type = models.CharField(max_length=100)
    discount_id = models.ForeignKey(Discount, on_delete=models.CASCADE)
