from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
# class CustomUser(AbstractUser):
#     username = None
#     email = models.EmailField(unique=True)
#     password = models.CharField(max_length=100)
#     password2 = models.CharField(max_length=100)
#     name = models.CharField(max_length=100)
#     phone_number = models.CharField(max_length=100, blank=True, null=True)
#     image = models.CharField(default="https://iili.io/JfxLsA7.png", max_length=10000)

#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = [password, password2, name, phone_number]

#     def __str__(self):
#         return self.email


class UserUploadedFile(models.Model):
    # user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    file = models.FileField(upload_to="media/uploads/")
    uploaded_at = models.DateTimeField(auto_now_add=True)


class Result(models.Model):
    file = models.ForeignKey(UserUploadedFile, on_delete=models.PROTECT)
    section_identified = models.CharField(max_length=100)
    offence_detected = models.CharField(max_length=1000)
    geretaed_explaination = models.TextField()
    punishment = models.TextField()
    court = models.CharField(max_length=1000)
    is_cognizable = models.BooleanField(default=True)
    is_bailable = models.BooleanField(default=True)
