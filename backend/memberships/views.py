from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Membership
from .serializers import MembershipSerializer
from django.shortcuts import get_object_or_404


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_memberships(request):
    memborships = Membership.objects.all()
    serializer = MembershipSerializer(memborships, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_memberships(request, pk):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = MembershipSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        memberships = Membership.objects.filter(user_id=request.user.id)
        serializer = MembershipSerializer(memberships, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        membership = get_object_or_404(Membership, pk=pk)
        serializer = MembershipSerializer(Membership, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        membership = get_object_or_404(Membership, pk=pk)
        membership.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)