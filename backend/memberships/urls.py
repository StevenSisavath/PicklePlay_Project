from django.urls import path, include
from memberships import views

urlpatterns = [
    path('', views.user_memberships),
    path('all/', views.get_all_memberships),
    path('<int:pk>/', views.user_memberships),
]