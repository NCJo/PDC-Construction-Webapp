from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.shortcuts import redirect

# Create your views here.

@login_required
def index(request):
    # Add html landing page
    return render(request, 'pdc_templates/index.html')

@login_required
def projects(request):
    return render(request, 'pdc_templates/projects.html')

# OLD
@login_required
def samed_gallery(request):
    return render(request, 'pdc_templates/samed.html')

@login_required
def ptb_gallery(request):
    return render(request, 'pdc_templates/ptb_warehouse.html')

@login_required
def cp_gallery(request):
    return render(request, 'pdc_templates/cp.html')

@login_required
def yip_gallery(request):
    return render(request, 'pdc_templates/yip_fac.html')

@login_required
def sangfah_gallery(request):
    return render(request, 'pdc_templates/sangfah.html')
# END OF OLD

# Projects
@login_required
def one_gallery(request):
    return render(request, 'pdc_templates/projects/one.html')

@login_required
def two_gallery(request):
    return render(request, 'pdc_templates/projects/two.html')

@login_required
def three_gallery(request):
    return render(request, 'pdc_templates/projects/three.html')

@login_required
def four_gallery(request):
    return render(request, 'pdc_templates/projects/four.html')


# End of Projects



@login_required
def activities(request):
    return render(request, 'pdc_templates/activities.html')

@login_required
def about_us(request):
    return render(request, 'pdc_templates/about_us.html')

@login_required
def contact_us(request):
    return render(request, 'pdc_templates/contact_us.html')

def logout_view(request):
    logout(request)
    return redirect('index')
