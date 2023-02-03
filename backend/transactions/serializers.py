from rest_framework import serializers
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ['id', 'user_id', 'tournament_id', 'discount_id', 'total_amount']
        depth = 3
