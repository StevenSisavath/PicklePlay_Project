from django.urls import path, include
from players import views

urlpatterns = [
    path('', views.user_players),
    path('all/', views.get_all_players),
    path('<int:pk>/', views.players_update),
]