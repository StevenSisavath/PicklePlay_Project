from django.urls import path, include
from tournaments import views

urlpatterns = [
    path('', views.user_tournaments),
    path('all/', views.get_all_tournaments),
    path('<int:pk>/', views.user_tournaments_update),
]