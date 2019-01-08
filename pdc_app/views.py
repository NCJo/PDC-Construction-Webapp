from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    # Add html landing page
    return render(request, 'pdc_templates/index.html')

def projects(request):
    return render(request, 'pdc_templates/projects.html')

