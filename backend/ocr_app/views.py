from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework import generics, renderers
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response

from .serializers import *
from django.conf import settings

from modules.ocr_module.ocr import OCR
from modules.gpt_module.gpt import generate_fir
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


class UserUploadedFileView(generics.RetrieveAPIView):
    serializer_class = UserUploadedFileSerializer
    renderer_classes = [renderers.JSONRenderer]

    def get(self, request, *args, **kwargs):
        user_uploaded_file = UserUploadedFile.objects.latest("id")
        relative_file_url = str(user_uploaded_file.file)
        base_url = str(settings.BASE_DIR)
        absolute_url = base_url+"/"+relative_file_url

            # ocr implimentation
        ocr = OCR('hi', False) # false cause high gpu usage
        image_path = absolute_url
        img = ocr.read_img(image_path)
        text = ocr.get_text(img, to_be_translated=False, tgt='en')
        text_str = " ".join(text)

        print({
                "fir_text_original": text_str,
                # "fir_text_translated": translated_text_str
            })

        """gpt implimentation"""
        prompt = text_str
        result = generate_fir(prompt)
        print(result)

        return Response(
                {
                    result
                },
                status=status.HTTP_200_OK
            )

        #     return Response(
        #         {
        #             "fir_text_original": text,
        #             "fir_text_translated": translated_text_str
        #         }, status=status.HTTP_200_OK
        #     )
        # except:
        #     return Response(status=status.HTTP_400_BAD_REQUEST)
        

# class ResultView(generics.RetrieveAPIView):
#     serializer_class = ResultSerializer
#     renderer_classes = [renderers.JSONRenderer]

#     def get(self, request, *args, **kwargs):
#         pass