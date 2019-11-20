from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.shortcuts import redirect

# Create your views here.


def index(request):
    # Add html landing page
    return render(request, 'pdc_templates/index.html')


def projects(request):
    return render(request, 'pdc_templates/projects.html')

# OLD

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
# END OF OLD

# Projects

def one_gallery(request):
    return render(request, 'pdc_templates/projects/one.html')


def two_gallery(request):
    return render(request, 'pdc_templates/projects/two.html')


def three_gallery(request):
    return render(request, 'pdc_templates/projects/three.html')


def four_gallery(request):
    return render(request, 'pdc_templates/projects/four.html')

def five_gallery(request):
    return render(request, 'pdc_templates/projects/five.html')

def six_gallery(request):
    return render(request, 'pdc_templates/projects/six.html')

def seven_gallery(request):
    return render(request, 'pdc_templates/projects/seven.html')

def eight_gallery(request):
    return render(request, 'pdc_templates/projects/eight.html')

def nine_gallery(request):
    return render(request, 'pdc_templates/projects/nine.html')

def ten_gallery(request):
    return render(request, 'pdc_templates/projects/ten.html')

def eleven_gallery(request):
    return render(request, 'pdc_templates/projects/eleven.html')

def twelve_gallery(request):
    return render(request, 'pdc_templates/projects/twelve.html')

def thirteen_gallery(request):
    return render(request, 'pdc_templates/projects/thirteen.html')

def fourteen_gallery(request):
    return render(request, 'pdc_templates/projects/fourteen.html')

def fifteen_gallery(request):
    return render(request, 'pdc_templates/projects/fifteen.html')

def sixteen_gallery(request):
    return render(request, 'pdc_templates/projects/sixteen.html')

def seventeen_gallery(request):
    return render(request, 'pdc_templates/projects/seventeen.html')

def eightteen_gallery(request):
    return render(request, 'pdc_templates/projects/eightteen.html')

def nineteen_gallery(request):
    return render(request, 'pdc_templates/projects/nineteen.html')

def twenty_gallery(request):
    return render(request, 'pdc_templates/projects/twenty.html')

def twentyone_gallery(request):
    return render(request, 'pdc_templates/projects/twentyone.html')

def twentytwo_gallery(request):
    return render(request, 'pdc_templates/projects/twentytwo.html')

def twentythree_gallery(request):
    return render(request, 'pdc_templates/projects/twentythree.html')

def twentyfour_gallery(request):
    return render(request, 'pdc_templates/projects/twentyfour.html')

def twentyfive_gallery(request):
    return render(request, 'pdc_templates/projects/twentyfive.html')

def twentysix_gallery(request):
    return render(request, 'pdc_templates/projects/twentysix.html')

# End of Projects




def activities(request):
    return render(request, 'pdc_templates/activities.html')


def about_us(request):
    return render(request, 'pdc_templates/about_us.html')


def contact_us(request):
    return render(request, 'pdc_templates/contact_us.html')

def logout_view(request):
    logout(request)
    return redirect('index')


# For login

# @login_required
# def index(request):
#     # Add html landing page
#     return render(request, 'pdc_templates/index.html')