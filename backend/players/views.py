from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Player
from .serializers import PlayerSerializer
from django.shortcuts import get_object_or_404


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_players(request):
    players = Player.objects.all()
    serializer = PlayerSerializer(players, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST', 'PUT'])
@permission_classes([IsAuthenticated])
def user_players(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = PlayerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        players = Player.objects.filter(tournament=request.user.id)
        serializer = PlayerSerializer(players, many=True)
        return Response(serializer.data)
    
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def players_update(request, pk):
    player = get_object_or_404(Player, pk=pk)
    serializer = PlayerSerializer(player, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)
