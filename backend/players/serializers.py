from rest_framework import serializers
from .models import Player

class PlayerSerializer(serializers.ModelSerializer):
    tournament_id= serializers.IntegerField(write_only=True)
    class Meta:
        model = Player
        fields = ['id', 'user', 'tournament', 'tournament_id']
        depth = 1