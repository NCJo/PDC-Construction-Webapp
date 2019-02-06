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
    path('projects/samed/', views.samed_gallery, name='samed_gallery'),
    path('projects/ptb/', views.ptb_gallery, name='ptb_gallery'),
    path('projects/cp/', views.cp_gallery, name='cp_gallery'),
    path('projects/yip/', views.yip_gallery, name='yip_gallery'),
    path('projects/sangfah/', views.sangfah_gallery, name='sangfah_gallery'),
    path('activities/', views.activities, name='activities'),
    path('about_us/', views.about_us, name='about_us'),
    path('contact_us/', views.contact_us, name='contact_us'),
    url('pdc_app/', include('pdc_app.urls')),
]
