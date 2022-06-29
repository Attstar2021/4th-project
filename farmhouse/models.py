from curses.ascii import US
from statistics import mode
from django.contrib.auth.models import User
from django.db import models
from django.db import models
import uuid

# Create your models here.

class farmhouseModel(models.Model):
    uid = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now_add=True)

    class Meta:
       abstract = True

class Facilities(farmhouseModel):
    facility_name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.facility_name


class Hotel(farmhouseModel):
    room_name = models.CharField(max_length=50)
    room_price = models.IntegerField()
    description = models.TextField()
    facilities = models.ManyToManyField(Facilities)
    room_count = models.IntegerField(default=5)

    def __str__(self) -> str:
        return self.room_name

class RoomImages(farmhouseModel):
    room = models.ForeignKey(Hotel, related_name='images', on_delete=models.CASCADE)
    images = models.ImageField(upload_to="hotels")

class RoomBooking(farmhouseModel):
    room = models.ForeignKey(Hotel, related_name='room_booking', on_delete=models.CASCADE)
    user = models.ForeignKey(User, related_name='user_booking', on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()
    #booking_type = models.CharField(max-length=50, choices=(('pre-paid', 'pre-paid'), ('post paid', 'post paid')))