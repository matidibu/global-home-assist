# Configuración de Google AdSense

El sitio ya está preparado para mostrar anuncios de Google AdSense. Solo necesitas configurar tus slot IDs.

## ✅ Qué está hecho

1. ✓ Script de AdSense presente en `src/app/layout.tsx`
2. ✓ Publisher ID configurado: `ca-pub-6133557054306983`
3. ✓ Componente `AdSenseUnit` creado en `src/components/AdSenseUnit.tsx`
4. ✓ Anuncios agregados en:
   - **Homepage**: Después del hero principal
   - **Páginas de destino**: En el medio del contenido
   - **Blog (lista)**: Después del filtro de categorías
   - **Blog (artículos)**: Después del contenido principal

## 📋 Qué falta: Slot IDs

Para que los anuncios se muestren, necesitas obtener tus **Slot IDs** de AdSense:

### Pasos:
1. Ve a https://adsense.google.com/account
2. En la barra lateral, ve a **Ads** → **Ad units**
3. Crea 4 unidades de anuncios (o reutiliza existentes):
   - **Homepage**: Ad unit ID (ej: `1234567890`)
   - **Destination**: Ad unit ID (ej: `2345678901`)
   - **Blog List**: Ad unit ID (ej: `3456789012`)
   - **Blog Post**: Ad unit ID (ej: `4567890123`)

### Configuración en `.env.local`:

Agrega estas líneas a tu `.env.local`:

```
NEXT_PUBLIC_ADSENSE_SLOT_HOMEPAGE=TU_SLOT_HOMEPAGE
NEXT_PUBLIC_ADSENSE_SLOT_DESTINATION=TU_SLOT_DESTINATION
NEXT_PUBLIC_ADSENSE_SLOT_BLOG_LIST=TU_SLOT_BLOG_LIST
NEXT_PUBLIC_ADSENSE_SLOT_BLOG_POST=TU_SLOT_BLOG_POST
```

Reemplaza `TU_SLOT_*` con tus valores reales.

## 🔄 Orden de prioridad

Si aún no tienes 4 unidades de anuncios configuradas:

1. **Prioritario**: Homepage + Destination (mayor tráfico)
2. **Secundario**: Blog List + Blog Post

## 📊 Ubicación de anuncios

| Página | Ubicación | Formato |
|--------|-----------|---------|
| Homepage | Después del hero | Auto (responsive) |
| /destino/[slug] | Medio del contenido | Auto (responsive) |
| /blog | Debajo de filtros | Auto (responsive) |
| /blog/[slug] | Fin del artículo | Auto (responsive) |

## ⚡ Notas importantes

- El script de AdSense se carga automáticamente
- Los anuncios no aparecerán en `localhost` (solo en dominio público)
- Los anuncios tampoco aparecerán si:
  - No has verificado el sitio en AdSense
  - El sitio aún está en revisión
  - Los slot IDs no están configurados

## 🧪 Pruebas locales

Para ver los bloques de anuncios en desarrollo (sin anuncios reales):
```bash
npm run dev
# Verás bloques grises con los estilos de AdSense
```

## ✅ Checklist final

- [ ] Creadas 4 unidades de anuncios en AdSense
- [ ] Slot IDs agregados a `.env.local`
- [ ] Servidor reiniciado después de cambios en `.env.local`
- [ ] Sitio verificado en AdSense
- [ ] Sitio pasó revisión de AdSense
- [ ] Deploy a producción
