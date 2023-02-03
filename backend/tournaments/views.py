from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Tournament
from .serializers import TournamentSerializer
from django.shortcuts import get_object_or_404


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_tournaments(request):
    tournaments = Tournament.objects.all()
    serializer = TournamentSerializer(tournaments, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST', 'PUT'])
@permission_classes([IsAuthenticated])
def user_tournaments(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = TournamentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        tournaments = Tournament.objects.filter(address=request.user.id)
        serializer = TournamentSerializer(tournaments, many=True)
        return Response(serializer.data)
    
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def user_tournaments_update(request, pk):
    tournament = get_object_or_404(Tournament, pk=pk)
    serializer = TournamentSerializer(tournament, data=request.data)
    serializer.is_valid(raise_exception=True)
    serializer.save()
    return Response(serializer.data)
