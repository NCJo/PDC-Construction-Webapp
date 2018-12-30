# curently broken

app_name = 'pdc_app'
from django.urls import path
from django.conf.urls import include
from pdc_app import views

urlpatterns = [
    path('', views.index, name='index'),
    path('portfolio/', views.portfolio, name="portfolio"),
]
