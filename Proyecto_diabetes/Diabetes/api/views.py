from django.http.response import JsonResponse
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
import json
from .models import Diabetes

# Create your views here.

class usuariosView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, args, *kwargs):
        return super().dispatch(request, *args, **kwargs)
      
    def get(self, request):
        pass
    def get(self, request):
        pass
    def get(self, request):
        pass
    def get(self, request):
        pass
        

class Diabetes(View):
    @method_decorator(csrf_exempt)
    def dispatch(self,request, *args, **kwargs):
        return super().dispatch(request,*args, **kwargs)

    def post(self,req):
        datos = json.loads(req.body)
        
       
        if datos['tipo'] == "ObtenDatos":
            year = list(Diabetes.objects.values())
            decesos = []
            for des in year:
                decesos.append({'name':(des['year']), 'value': des['decesos']})
            datos = {'ObtenDatos': [{
                'name':'TotalDecesos',
                'series': decesos
            }]
            }
       
        if datos['tipo'] == 'Registro':
          jd= json.loads(req.body)
          decesos.objects.create(decesos=jd['decesos'],year=jd['year'])
          return JsonResponse({'mensaje':'Registrado'})

        if datos['tipo'] == 'actualizar':
          jd= json.loads(req.body)
          buscar = list(Diabetes.objects.filter(year=datos['year']).values())
          if len(buscar) > 0:
            registro=Diabetes.objects.get(year=datos['year'])
            registro.decesos=jd['decesos']
            registro.year = jd['year']
            registro.save()
            dato={'mensaje':'editado'}
          return JsonResponse(dato)

        # Eliminar registros
        if datos['tipo'] == 'eliminar':
          buscar = list(Diabetes.objects.filter(year=datos['year']).values())
          if len(buscar) > 0:
            registro=Diabetes.objects.get(year=datos['year'])
            registro.delete()
            dato={'mensaje':'eliminado'}
          return JsonResponse(dato)

        


