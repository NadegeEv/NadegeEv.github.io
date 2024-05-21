---
title: "Change of Measure for Bayesian Field Inversion with Hierarchical Hyperparameters Sampling"
slug: publi-new
description: "Preprint now available online !"
pubDate: "Apr 30 2024"
heroImage: "/field.png"
tags: ["NEW","preprint"]
---

Preprint available online [here](https://hal.science/cea-04551914) !

Authors: Nadège Polette, Olivier Le Maître, Pierre Sochala, Alexandrine Gesret

Abstract:
This paper proposes an effective treatment of hyperparameters in the Bayesian inference of a scalar field from indirect observations. Obtaining the joint posterior distribution of the field and its hyperparameters is challenging. The infinite dimensionality of the field requires a finite parametrization that usually involves hyperparameters to reflect the limited prior knowledge. In the present work, we consider a Karhunen-Lo{è}ve (KL) decomposition for the random field and hyperparameters to account for the lack of prior knowledge of its autocovariance function. The hyperparameters must be inferred. To efficiently sample jointly the KL coordinates of the field and the autocovariance hyperparameters, we introduce a change of measure to reformulate the joint posterior distribution into a hierarchical Bayesian form. The likelihood depends only on the field's coordinates in a fixed KL basis, with a prior conditioned on the hyperparameters. We exploit this structure to derive an efficient Markov Chain Monte Carlo (MCMC) sampling scheme based on an adapted Metropolis-Hasting algorithm. We rely on surrogate models (Polynomial Chaos expansions) of the forward model predictions to further accelerate the MCMC sampling. A first application to a transient diffusion problem shows that our method is consistent with other approaches based on a change of coordinates (Sraj et al., 2016). A second application to a seismic traveltime tomography highlights the importance of inferring the hyperparameters.

<img src="/field.png"
     alt="Change of Measure Picture"
     width="500"
     style="display:block; margin-left: auto; margin-right: auto;" />
