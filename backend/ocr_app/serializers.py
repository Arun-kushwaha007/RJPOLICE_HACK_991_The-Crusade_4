import base64
from rest_framework import serializers
from .models import UserUploadedFile


class UserUploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserUploadedFile
        fields = "__all__"
