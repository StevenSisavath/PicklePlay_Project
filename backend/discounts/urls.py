from django.urls import path, include
from discounts import views

urlpatterns = [
    path('', views.user_discounts),
    path('all/', views.get_all_discounts),
    path('<int:pk>/', views.user_discounts),
]