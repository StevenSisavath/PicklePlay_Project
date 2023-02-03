from rest_framework import serializers
from .models import Discount

class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = ['id', 'discount_type', 'discount_total']