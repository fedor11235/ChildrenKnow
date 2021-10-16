from django.shortcuts import render

from rest_framework import viewsets
from .models import Note
from .serializers import NoteSerializer
from rest_framework.decorators import api_view

from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all().order_by('-created_at')
    serializer_class = NoteSerializer

    # renderer_classes = [JSONRenderer]
    # #parser_classes = [JSONParser]


