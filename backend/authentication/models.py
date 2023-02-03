from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    pass
    '''
    This is a custom version of the built in User class
    It contains all of the built in fields and functionality of the standard User
    You can add fields here for any additional properties you want a User to have
    This is useful for adding roles (Customer and Employee, for example)
    For just a few roles, adding boolean fields is advised
    '''
    # Example (note import of models above that is commented out)
    # this will add a column to the user table
    is_club_owner = models.BooleanField('club owner status', default=False)
    is_pro_member = models.BooleanField('pro member status', default=False)
    is_standard_member = models.BooleanField('standard member status', default=False)
    rating = models.FloatField(max_length=10, null=True, blank=True)
    gender = models.CharField(max_length=1)
