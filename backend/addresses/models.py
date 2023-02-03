from django.db import models

# Create your models here.
class Address(models.Model):
    house_number = models.IntegerField()
    street_name = models.CharField(max_length=100)
    street_type = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip_code = models.IntegerField()
