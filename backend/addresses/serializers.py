from rest_framework import serializers
from .models import Address
class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = ['id', 'house_number', 'street_name', 'street_type', 'city', 'state', 'zip_code']
