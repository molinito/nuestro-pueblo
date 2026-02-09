# Video documental - Configuracion guardada (preset actual)

Este archivo deja documentada la configuracion que quedo aprobada para reutilizar en futuros videos.

## Preset vigente (Monserrat v2)

- video base: `src/img/documental_monserrat.webm`
- musica: `src/img/documental.mp3` (loop)
- narracion: voz `Paulina` (`es_MX`)
- salida comparacion: `src/img/documental_monserrat_v2_paulina.webm`
- regla de tiempo narracion: empieza `+3s` y termina `-3s` antes del final
- estilo de locucion: pausas por oracion, pausas mas largas al cambio de parrafo

## Parametros tecnicos usados

- duracion video base: `368.408s`
- objetivo de cuerpo narrado: `duracion_video - 6s` (`362.408s`)
- volumen voz: `1.04`
- ducking musica: `threshold=0.09`, `ratio=5`, `attack=20`, `release=280`, `makeup=1`
- limitador final: `alimiter=limit=0.95`
- codec salida audio: `libopus` a `192k`
- codec video: `copy` (no reencode del video)

## Comando de mezcla (plantilla)

```bash
ffmpeg -y \
  -i src/img/documental_monserrat.webm \
  -stream_loop -1 -i src/img/documental.mp3 \
  -i src/img/narracion_monserrat_paulina_v2_full.wav \
  -filter_complex "\
[1:a]atrim=duration=368.408,asetpts=N/SR/TB,volume=0.95[bg];\
[2:a]atrim=duration=368.408,volume=1.04[n0];\
[n0]asplit=2[nsc][nm];\
[bg][nsc]sidechaincompress=threshold=0.09:ratio=5:attack=20:release=280:makeup=1[duck];\
[duck][nm]amix=inputs=2:weights='1 1':duration=first:dropout_transition=2,alimiter=limit=0.95[mix]" \
  -map 0:v -map "[mix]" \
  -c:v copy -c:a libopus -b:a 192k \
  src/img/documental_monserrat_v2_paulina.webm
```

Nota: para otro video, reemplazar siempre `368.408` por su duracion real.

## Checklist rapido para futuros videos

1) Normalizar clips a `30fps` y sin audio antes de unirlos.
2) Excluir clips que no deben entrar (ejemplo anterior: `92.webm`).
3) Generar locucion con pausas por oracion y distribuirla en toda la duracion util.
4) Dejar colchones de `3s` al inicio y final de la narracion.
5) Mezclar con ducking para que la voz siempre se entienda sobre la musica.
