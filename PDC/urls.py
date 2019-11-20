app_name = 'pdc'

"""PDC URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/dev/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from pdc_app import views
from django.conf.urls import url

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('django.contrib.auth.urls')),
    path('logout/', views.logout_view, name='logout'),
    path('', views.index, name='index'),
    path('projects/', views.projects, name='projects'),


    # Old
    path('projects/samed/', views.samed_gallery, name='samed_gallery'),
    path('projects/ptb/', views.ptb_gallery, name='ptb_gallery'),
    path('projects/cp/', views.cp_gallery, name='cp_gallery'),
    path('projects/yip/', views.yip_gallery, name='yip_gallery'),
    path('projects/sangfah/', views.sangfah_gallery, name='sangfah_gallery'),
    # End of old


    # Projects
    path('projects/one/', views.one_gallery, name="one_gallery"),
    path('projects/two/', views.two_gallery, name="two_gallery"),
    path('projects/three/', views.three_gallery, name="three_gallery"),
    path('projects/four/', views.four_gallery, name="four_gallery"),
    path('projects/five/', views.five_gallery, name="five_gallery"),
    path('projects/six/', views.six_gallery, name="six_gallery"),
    path('projects/seven/', views.seven_gallery, name="seven_gallery"),
    path('projects/eight/', views.eight_gallery, name="eight_gallery"),
    path('projects/nine/', views.nine_gallery, name="nine_gallery"),
    path('projects/ten/', views.ten_gallery, name="ten_gallery"),
    path('projects/eleven/', views.eleven_gallery, name="eleven_gallery"),
    path('projects/twelve/', views.twelve_gallery, name="twelve_gallery"),
    path('projects/thirteen/', views.thirteen_gallery, name="thirteen_gallery"),
    path('projects/fourteen/', views.fourteen_gallery, name="fourteen_gallery"),
    path('projects/fifteen/', views.fifteen_gallery, name="fifteen_gallery"),
    path('projects/sixteen/', views.sixteen_gallery, name="sixteen_gallery"),
    path('projects/seventeen/', views.seventeen_gallery, name="seventeen_gallery"),
    path('projects/eightteen/', views.eightteen_gallery, name="eightteen_gallery"),
    path('projects/nineteen/', views.nineteen_gallery, name="nineteen_gallery"),
    path('projects/twenty/', views.twenty_gallery, name="twenty_gallery"),
    path('projects/twentyone/', views.twentyone_gallery, name="twentyone_gallery"),
    path('projects/twentytwo/', views.twentytwo_gallery, name="twentytwo_gallery"),
    path('projects/twentythree/', views.twentythree_gallery, name="twentythree_gallery"),
    path('projects/twentyfour/', views.twentyfour_gallery, name="twentyfour_gallery"),
    path('projects/twentyfive/', views.twentyfive_gallery, name="twentyfive_gallery"),
    path('projects/twentysix/', views.twentysix_gallery, name="twentysix_gallery"),




    # End of projects

    path('activities/', views.activities, name='activities'),
    path('about_us/', views.about_us, name='about_us'),
    path('contact_us/', views.contact_us, name='contact_us'),
    url('pdc_app/', include('pdc_app.urls')),
]
