import events from '../data/eventos.json';

import castanyadaPic from '../assets/eventos/castanyas.jpeg';
import nochebuenaPic from '../assets/eventos/nochebuena.webp';
import nocheviejaPic from '../assets/eventos/nochevieja.webp';
import nocheviejaVerticalPic from '../assets/eventos/nochevieja_vertical.jpeg';
import farolillosPic from '../assets/eventos/cabalgata.jpg';
import guajarExtremePic from '../assets/eventos/guajar-extreme.webp';

const picturesVerticales = {
  castanada: castanyadaPic,
  nochebuena: nochebuenaPic,
  nochevieja: nocheviejaVerticalPic,
  'cabalgata-reyes': farolillosPic,
  'guajar-extreme': guajarExtremePic
};
const picturesHorizontal = {
  castanada: castanyadaPic,
  nochebuena: nochebuenaPic,
  nochevieja: nocheviejaPic,
  'cabalgata-reyes': farolillosPic,
  'guajar-extreme': guajarExtremePic
};

export function getNextEvents({ limit } = {}) {
  const nextEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate > Date.now();
    })
    .sort((prev, next) => new Date(prev.date) - new Date(next.date))
    .slice(0, limit)
    .map((event) => {
      const { slug, name, date, abstract } = event;
      const formatedDate = formatDate(date);
      return {
        slug,
        name,
        thumbnail: picturesVerticales[slug],
        abstract,
        date: formatedDate
      };
    });
  return nextEvents;
}

export function getEventBySlug(slug) {
  const event = events
    .map((event) => {
      const { slug, name, date, description, location, sponsors } = event;
      const formatedDate = formatDate(date);
      return {
        slug,
        name,
        thumbnail: picturesHorizontal[slug],
        description,
        date: formatedDate,
        location,
        sponsors
      };
    })
    .find((event) => event.slug === slug);
  return event;
}

export function getHighlightedEvent() {
  const event = events.find((event) => !!event.highlighted);
  if (!event) return null;

  const { date, location, slug } = event;
  const {
    title,
    short_description,
    link_text,
    extern_link_url,
    intern_link_url
  } = event.highlighted;

  return {
    title,
    thumbnail: picturesHorizontal[slug],
    shortDescription: short_description,
    linkText: link_text,
    externalLinkUrl: extern_link_url,
    internLinkUrl: intern_link_url,
    date: formatDate(date),
    location
  };
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
