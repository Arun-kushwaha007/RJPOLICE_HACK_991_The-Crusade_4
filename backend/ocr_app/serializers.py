from rest_framework import serializers
from .models import UserUploadedFile, Result


class UserUploadedFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserUploadedFile
        fields = "__all__"


class ResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ("id", "file", "section_identified", "offence_detected", "geretaed_explaination", "punishment", "court", "is_cognizable", "is_bailable")