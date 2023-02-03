from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Transaction
from .serializers import TransactionSerializer
from django.shortcuts import get_object_or_404


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_transactions(request):
    transactions = Transaction.objects.all()
    serializer = TransactionSerializer(transactions, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_transactions(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = TransactionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        transactions = Transaction.objects.filter(user_id=request.user.id)
        serializer = TransactionSerializer(transactions, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        transaction = get_object_or_404(Transaction, pk=pk)
        serializer = TransactionSerializer(transaction, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        transaction = get_object_or_404(Transaction, pk=pk)
        transaction.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
