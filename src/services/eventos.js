import events from '../data/eventos.json';

import castanyadaPic from '../assets/eventos/castanyas.jpeg';
import nochebuenaPic from '../assets/eventos/nochebuena.jpeg';
import nocheviejaPic from '../assets/eventos/nochevieja.jpeg';
import guajarExtremePic from '../assets/eventos/guajar-extreme.webp';

const pictures = {
  castanada: castanyadaPic,
  nochebuena: nochebuenaPic,
  nochevieja: nocheviejaPic,
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
      const { slug, name, date } = event;
      const formatedDate = formatDate(date);
      return {
        slug,
        name,
        thumbnail: pictures[slug],
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
        thumbnail: pictures[slug],
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
    thumbnail: pictures[slug],
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
