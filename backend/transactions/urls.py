from django.urls import path, include
from transactions import views

urlpatterns = [
    path('', views.user_transactions),
    path('all/', views.get_all_transactions),
    path('<int:pk>/', views.user_transactions),
]