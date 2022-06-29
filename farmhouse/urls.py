from django.urls import path
from . import views


urlpatterns = [
    path('booking.html/', views.home_page)
]
