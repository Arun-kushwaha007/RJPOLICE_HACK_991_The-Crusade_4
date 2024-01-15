from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework import generics, renderers
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import *

# from ...OCR.ocr import OCR
# Create your views here.


class FileUploadView(generics.CreateAPIView):
    serializer_class = UserUploadedFileSerializer
    renderer_classes = [renderers.JSONRenderer]

    def post(self, request, *args, **kwargs):
        serializer = UserUploadedFileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(
            {"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST
        )


class UserUploadedFileView(APIView):
    def get(self, request, *args, **kwargs):
        """
        import ocr and use image directly by calling it's path stored in database.
        """
        pass
