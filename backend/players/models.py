from django.db import models
from tournaments.models import Tournament
from authentication.models import User

# Create your models here.
class Player(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tournament = models.ForeignKey(Tournament, on_delete=models.CASCADE)
    