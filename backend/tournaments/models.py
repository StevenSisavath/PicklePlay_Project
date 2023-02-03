from django.db import models
from addresses.models import Address
from authentication.models import User

# Create your models here.
class Tournament(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    player_count = models.IntegerField()
    start_date = models.DateField()
    end_date = models.DateField()
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    format = models.CharField(max_length=1000, default='2 Round Robins then the winners of each side will play each other for first.')
    