from django.urls import path, include
from addresses import views

urlpatterns = [
    path('', views.user_addresses),
    path('all/', views.get_all_addresses),
    # path('<int:pk>/', views.user_addresses),
]