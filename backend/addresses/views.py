from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Address
from .serializers import AddressSerializer
from django.shortcuts import get_object_or_404

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_addresses(request):
    addresses = Address.objects.all()
    serializer = AddressSerializer(addresses, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_addresses(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = AddressSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        addresses = Address.objects.filter(user_id=request.user.id)
        serializer = AddressSerializer(addresses, many=True)
        return Response(serializer.data)
    # elif request.method == 'PUT':
    #     address = get_object_or_404(Address, pk=pk)
    #     serializer = AddressSerializer(Address, data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     serializer.save()
    #     return Response(serializer.data)
    # elif request.method == 'DELETE':
    #     address = get_object_or_404(Address, pk=pk)
    #     address.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)