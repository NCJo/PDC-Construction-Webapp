from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    # Add html landing page
    return render(request, 'pdc_templates/index.html')

def projects(request):
    return render(request, 'pdc_templates/projects.html')

def samed_gallery(request):
    return render(request, 'pdc_templates/samed.html')

def ptb_gallery(request):
    return render(request, 'pdc_templates/ptb_warehouse.html')

def cp_gallery(request):
    return render(request, 'pdc_templates/cp.html')

def yip_gallery(request):
    return render(request, 'pdc_templates/yip_fac.html')

def sangfah_gallery(request):
    return render(request, 'pdc_templates/sangfah.html')

def activities(request):
    return render(request, 'pdc_templates/activities.html')

def about_us(request):
    return render(request, 'pdc_templates/about_us.html')

def contact_us(request):
    return render(request, 'pdc_templates/contact_us.html')
