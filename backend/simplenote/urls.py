# backend/simplenote/urls.py
from django.conf.urls import include, url
from django.contrib import admin
urlpatterns = [
    url(r'^api/v1/', include('notes.urls')),
    url(r'^api/v2/', include('pateri.urls')),
    url(r'^admin/', admin.site.urls),
]