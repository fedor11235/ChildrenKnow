from django.shortcuts import render
from django.views import View
import json

from django.views.generic import TemplateView


class VueAppView(TemplateView):
    template_name = 'index.html'

# class FrontendTemplateView(View):
  
#   def get(self, request):
#     # Собираем все параметры запроса в контекст
#     context = {
#         'post_data': request.body,
#         'get_data': json.dumps(request.GET) # Сериализуем в JSON
#     }
    
#     # Отправляем клиенту отрендеренный с контекстом шаблон
#     return render(request, 'index.html', context)
