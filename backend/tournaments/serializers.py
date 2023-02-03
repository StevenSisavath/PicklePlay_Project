from rest_framework import serializers
from .models import Tournament

class TournamentSerializer(serializers.ModelSerializer):
    address_id= serializers.IntegerField(write_only=True)
    class Meta:
        model = Tournament
        fields = ['id', 'name', 'player_count', 'start_date', 'end_date', 'address', 'user', 'address_id', 'format']
        depth = 1
