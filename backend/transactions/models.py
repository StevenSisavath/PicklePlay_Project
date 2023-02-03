from django.db import models
from authentication.models import User
from tournaments.models import Tournament
from memberships.models import Discount


# Create your models here.
class Transaction(models.Model):
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    tournament_id = models.ForeignKey(Tournament, on_delete=models.CASCADE)
    discount_id = models.ForeignKey(Discount, on_delete=models.CASCADE)
    total_amount = models.FloatField(max_length=10)