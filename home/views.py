from django.shortcuts import render
from django import views

# Create your views here.

def home(request):
    return render(request,'home.html')
