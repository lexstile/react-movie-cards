// @flow

export type MovieType = {
  id: Number,
  title: String,
  subtitle: String,
  description: String,
  year: Number,
  imageUrl: String,
  rating: Number,
};

export type recommendedType = {
  movieId: Number,
  rating: String,
};
