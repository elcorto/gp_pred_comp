Search.setIndex({"alltitles": {"Changing the GP optimizer": [[0, "changing-the-gp-optimizer"]], "Compare GPs and kernel ridge regression (KRR)": [[0, "compare-gps-and-kernel-ridge-regression-krr"]], "Comparison of GP libraries": [[4, "comparison-of-gp-libraries"]], "Correctness checks and examples on how to play with optimizers": [[1, "correctness-checks-and-examples-on-how-to-play-with-optimizers"]], "Data": [[1, "data"]], "Data scaling": [[0, "data-scaling"]], "Differences to KRR": [[0, "differences-to-krr"]], "Example results of optimized models": [[0, "example-results-of-optimized-models"]], "Explore GPs and KRR with code": [[1, "explore-gps-and-krr-with-code"]], "Functions and helpers": [[1, "functions-and-helpers"]], "GP optimizer": [[0, "gp-optimizer"]], "GPy": [[4, "gpy"]], "GPyTorch": [[4, "gpytorch"]], "GaussianProcessRegressor": [[0, "gaussianprocessregressor"]], "Hyperopt objective function": [[0, "hyperopt-objective-function"]], "Kernel / covariance function": [[0, "kernel-covariance-function"]], "KernelRidge": [[0, "kernelridge"]], "Noise in WhiteKernel": [[0, "noise-in-whitekernel"]], "Plot GP and KRR hyperparameter objective functions": [[1, "plot-gp-and-krr-hyperparameter-objective-functions"]], "Plot GP and KRR predictions after hyperopt": [[1, "plot-gp-and-krr-predictions-after-hyperopt"]], "Posterior, noiseless, interpolation": [[5, "posterior-noiseless-interpolation"]], "Posterior, noiseless, regression": [[5, "posterior-noiseless-regression"]], "Posterior, noisy, regression": [[5, "posterior-noisy-regression"]], "Prior and (noisy) posterior predictions": [[5, "prior-and-noisy-posterior-predictions"]], "Prior, noiseless": [[5, "prior-noiseless"]], "Prior, noisy": [[5, "prior-noisy"]], "Reference implementation of RW06 equations": [[3, "reference-implementation-of-rw06-equations"]], "Test!!1!1!": [[6, "test-1-1"]], "The role of noise in GPs": [[2, "the-role-of-noise-in-gps"]], "Why the GP and KRR hyperparameters are different after optimization": [[0, "why-the-gp-and-krr-hyperparameters-are-different-after-optimization"]], "sklearn": [[4, "sklearn"]], "tinygp": [[4, "tinygp"]]}, "docnames": ["content/gp_krr_hyperopt/intro", "content/gp_krr_hyperopt/notebook_comp_plot", "content/gp_pred_comp/intro", "content/gp_pred_comp/notebook_common", "content/gp_pred_comp/notebook_comp", "content/gp_pred_comp/notebook_plot", "notebook_test", "root"], "envversion": {"sphinx": 61, "sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9}, "filenames": ["content/gp_krr_hyperopt/intro.md", "content/gp_krr_hyperopt/notebook_comp_plot.md", "content/gp_pred_comp/intro.md", "content/gp_pred_comp/notebook_common.md", "content/gp_pred_comp/notebook_comp.md", "content/gp_pred_comp/notebook_plot.md", "notebook_test.md", "root.md"], "indexentries": {}, "objects": {}, "objnames": {}, "objtypes": {}, "terms": {"": [0, 1, 2, 3, 4, 5], "0": [0, 1, 2, 3, 4, 5, 7], "00017": 7, "001": [0, 1], "01": 1, "01442918": 1, "01443047": 1, "02582": 7, "03": 7, "05": 0, "05521953": 1, "075": 1, "08737": 0, "0882": 0, "08820850820059796": 0, "1": [0, 1, 3, 4, 5, 7], "10": [0, 1, 5, 7], "100": 4, "1000": [0, 1], "10000": 1, "11": 7, "11021768": 1, "1102177": 1, "11021772": 1, "12": [1, 7], "123": [1, 3, 4, 5], "140": 1, "14696558218508174": 0, "147": 0, "15": [1, 5], "150": 5, "1547018": 1, "15470279": 1, "16": 5, "17": 3, "18": [1, 5], "1807": 7, "18253": 7, "1905": 0, "1e": [0, 1, 4, 5], "2": [0, 1, 2, 3, 4, 5, 6, 7], "20": 1, "2006": [3, 7], "2018": 7, "2019": 7, "2020": 7, "2022": [5, 7], "22": 7, "23": 3, "23915": 7, "24": [2, 3, 5], "262": 7, "3": [1, 5, 6, 7], "30": [1, 5], "32": 1, "35": 1, "3d": 1, "4": [1, 4, 5, 6], "40": 1, "49de36": 7, "5": [1, 3, 4, 5], "50": [4, 5], "5281": 7, "5f": 5, "60": 1, "7": [5, 6], "7439202": 7, "8": 1, "9": [1, 5, 6], "A": [3, 7], "And": 7, "By": 5, "For": [0, 1, 5], "If": [5, 7], "In": [0, 4], "No": 1, "One": [0, 1], "That": 5, "The": [0, 4, 5, 7], "Then": 1, "There": 4, "These": 2, "To": 4, "Will": 6, "With": [0, 1], "_": [3, 4, 5, 6], "__init__": [1, 4], "_gp_obj_func_wrapp": 1, "_ho_obj_func_wrapp": 1, "_x": 1, "_y": 1, "aa": 5, "ab": [0, 7], "about": 7, "abov": [0, 1, 5, 6], "absenc": 5, "access": 0, "accur": 4, "actual": [1, 4], "ad": [0, 1, 4, 5], "add": [1, 4], "addit": 0, "addition": 0, "advanc": 7, "against": 4, "alg": 0, "all": [0, 1, 4], "alpha": [0, 1, 3, 4, 5], "alpha_": [0, 1], "alreadi": 0, "also": [0, 1, 5, 6], "alwai": 1, "amen": 0, "an": [0, 5, 7], "ani": 0, "anyth": 0, "api": [0, 1, 4], "app": 7, "approxim": 0, "ar": [1, 2, 4, 5, 7], "aren": 0, "arg": [1, 3], "around": [1, 4], "arrai": 1, "arxiv": [0, 7], "aspect": [0, 7], "assert": [1, 5], "assert_allclos": [1, 4, 5], "assum": [0, 1], "assume_a": 3, "atol": [1, 4, 5], "author": 7, "autolayout": [1, 5], "avail": 1, "averag": 0, "avoid": 1, "awai": 0, "ax": [1, 5, 6], "ax2d": 1, "ax3d": 1, "axi": [1, 5], "axs2d": 1, "axs3d": 1, "azim": 1, "b": [1, 3], "back": 0, "base": 1, "basi": [0, 7], "basic": 0, "bb": 5, "becaus": [0, 1, 4, 5], "been": 5, "befor": [0, 1], "below": [0, 1, 5, 6, 7], "best": 1, "better": 1, "between": [1, 2, 5], "bfg": 1, "bharath": 7, "bibtex": 7, "big": 1, "bit": 0, "black": 1, "bleak": 0, "blog": 7, "blue": 1, "book": [5, 7], "book2": 7, "bool": 5, "borrow": 2, "both": [0, 1, 4], "bound": [0, 1], "bounds_transform": 1, "box": 5, "bsd": 7, "bypass": 1, "c": 1, "calc_gp": 5, "calc_gp_post": 5, "calcul": [0, 4], "call": [0, 1, 4], "callback": 1, "can": [0, 1, 3, 4, 5], "cannot": 0, "carl": 7, "case": [0, 1, 4, 5], "cdist": 3, "cdot": [0, 5], "cell": 6, "certain": 5, "certainli": 5, "check": 5, "choleski": 4, "cholesky_jitt": 4, "christoph": 7, "cite": 7, "clariti": 1, "class": [1, 4], "claus": 7, "close": 1, "cm": 1, "cmap": 1, "code": [0, 3, 4, 5, 6, 7], "color": [1, 5], "colorbar": 1, "com": [1, 7], "combin": 0, "comment": 6, "common": [4, 5], "compact": 5, "compar": [1, 4, 7], "compare_gpi": 4, "compare_gpytorch": 4, "compare_sklearn": 4, "compare_tinygp": 4, "comparison": [0, 2, 7], "compon": 2, "concaten": 1, "cond": 4, "condit": 4, "config": 4, "confus": 0, "connect": 7, "constant": [0, 1, 5], "constraint": 4, "construct": 4, "content": [2, 7], "contourf": 1, "contrast": 0, "convent": 1, "converg": [1, 4], "convex": [0, 1], "convinc": 4, "core": 3, "correct": [0, 4], "costli": 0, "could": 1, "cours": [0, 1], "cov": [2, 3, 5], "cov2std": [3, 4, 5], "cov_titl": 5, "covar_modul": 4, "covar_root_decomposit": 4, "covari": [2, 4, 5, 7], "covariance_matrix": 4, "cpu_count": 1, "creat": 1, "cross": 0, "cross_val_scor": 1, "custom": [0, 1, 3], "cut": 1, "cv": [0, 1], "cyan": 5, "d": [1, 4, 5], "d_post_0": 5, "d_post_p": 5, "d_post_pn": 5, "d_pri_0": 5, "d_pri_p": 5, "data": [4, 5], "dd": 5, "de": 1, "de_callback": 1, "de_callback_logscal": 1, "de_kwds_common": 1, "def": [1, 3, 4, 5, 6], "default": [0, 1, 3, 4], "default_rng": [1, 3, 4, 5], "defer": 1, "defin": [0, 1, 5], "deisenroth": 7, "denot": 0, "depend": [0, 1], "der": 7, "detach": 4, "detail": 0, "deussen": 7, "diag": [1, 3, 4, 5], "diagon": 5, "dict": [1, 5], "differ": [1, 2, 3, 4, 5], "differenti": 1, "differential_evolut": [0, 1], "dino": 7, "direct": 3, "directsolv": 4, "discuss": 7, "disp": 1, "distanc": [1, 3], "distil": 7, "distribut": [1, 4], "dlvdw20": [5, 7], "do": [0, 1, 3, 5], "doc": 0, "doe": [0, 1, 3, 4], "doi": 7, "don": [0, 4], "done": 0, "dot": 1, "doubl": [1, 4], "dpi": 5, "draft": 7, "dtype": 1, "dual_coef_": 1, "e": [0, 1, 2, 4], "each": [0, 4], "easier": 3, "edward": 7, "effect": 0, "either": [0, 7], "elcorto": 7, "elev": 1, "elif": [1, 5], "ell": [0, 1, 4, 5, 7], "els": [1, 5], "empti": 1, "end": 0, "engin": 0, "enough": 4, "ensur": [0, 4], "entri": 7, "enumer": [1, 5], "ep": [1, 4], "eq": [2, 3, 5], "eqn": 4, "equal": [1, 4], "equat": [2, 4, 7], "equidist": 1, "equiv": 5, "equival": [0, 7], "err": 1, "error": 1, "esp": 0, "essenti": 1, "estim": 2, "eta": [0, 1, 7], "eval": 4, "eval_gradi": 1, "evalu": 0, "even": [0, 3, 4, 5], "evolut": 1, "exact": 0, "exactgp": 4, "exactgpmodel": 4, "exactli": 1, "excus": 7, "execut": 6, "exhaust": 0, "exp": [1, 3, 5, 7], "explor": [0, 7], "exponenti": [0, 7], "expos": 4, "expsquar": 4, "extern": [0, 1], "ey": [1, 3, 4, 5], "f": [1, 5], "f_": [2, 5], "f_gp_0": 1, "f_gp_1": 1, "f_gp_2": 1, "f_gp_3": 1, "f_gp_3_nolog": 1, "f_gp_kp": 1, "f_gp_kpr": 1, "f_gp_nzm": 1, "f_krr": 1, "f_krr_1": 1, "f_krr_2": 1, "f_krr_nolog": 1, "f_krr_nzm": 1, "fact": [0, 4], "fail": 0, "fals": [0, 1, 4, 5, 6], "far": 0, "fast": 0, "fast_comput": 4, "fast_pred_var": 4, "faster": 1, "fig": [5, 6], "fig1": 1, "fig2": 1, "fig3": 1, "figsiz": [1, 5], "figsize_singl": 5, "figur": [1, 5], "fill_between": [1, 5], "final": 1, "find": [0, 1, 5], "first": [4, 5], "fit": [0, 1, 4, 5], "fit_intercept": 0, "fix": [0, 1, 4, 5], "flat": [0, 1, 5], "flavor": 2, "float": [1, 4, 5], "float64": 4, "fm": 1, "follow": 1, "font": [1, 5], "foo": 6, "forc": 4, "form": 0, "forward": 4, "frac": 7, "from": [0, 1, 2, 3, 4, 5, 6, 7], "from_numpi": 4, "full_cov": 4, "fun": 1, "func": 1, "function": [4, 7], "functool": [3, 5], "g": [0, 1, 2, 4], "gap": 1, "gaussian": [0, 1, 7], "gaussian_nois": 1, "gaussian_process": [0, 1, 4, 5], "gaussianlikelihood": 4, "gaussianprocess": [4, 7], "gaussianprocessregressor": [1, 3, 4, 5], "gener": [0, 3, 4, 5], "get": [0, 3, 4, 5], "get_model": 1, "get_model_gp_2": 1, "get_model_gp_3": 1, "get_model_gp_3_nolog": 1, "get_model_krr": 1, "get_n_split": 1, "get_param": 0, "github": [1, 7], "give": 0, "given": 0, "gkd19": 7, "global": [0, 1], "goe": 1, "good": 0, "gp": [5, 7], "gp_cov": 4, "gp_krr_hyperopt_object": 1, "gp_krr_pred": 1, "gp_mean": 4, "gp_optim": 1, "gp_playground": 7, "gp_std": 4, "gpml": 7, "gpregress": 4, "gpy": 2, "gpy_kernel": 4, "grad": 1, "gradient": 0, "grai": [1, 5], "green": 1, "grid": 1, "gridspec_kw": [1, 5], "ground": [1, 5], "gt_func": [1, 5], "guess": 0, "guid": 7, "g\u00f6rtler": 7, "ha": [0, 1, 4, 5], "hack": 7, "half": 4, "hard": [0, 1], "have": [0, 1, 2, 3], "heavili": 1, "height_ratio": [1, 5], "held": 0, "helper": 5, "hennig": 7, "here": [0, 1, 3, 5, 6], "hidden": [4, 6], "high": 1, "higher": 1, "ho": 1, "how": [0, 4], "howev": [0, 1, 5], "html": [1, 7], "http": [0, 1, 7], "hyper": [0, 1], "hyperoptgp": 1, "hyperoptkrr": 1, "hyperparamet": [4, 5], "i": [0, 1, 2, 3, 4, 5, 6, 7], "ic": [1, 6], "icecream": [1, 6], "icol": 1, "idxs_test": 1, "idxs_train": 1, "ignor": 1, "ii": [0, 1, 5], "ij": [0, 1], "implement": [0, 2, 4, 7], "import": [0, 1, 3, 4, 5, 6], "in_scal": [1, 5], "includ": 4, "index": 1, "individu": 1, "infal": 7, "initial_theta": 1, "initial_valu": 4, "input": 4, "input_dim": 4, "inspect": [1, 5], "inspir": 7, "instanc": [1, 5], "instead": [0, 1, 4, 5], "instruct": 3, "interest": 1, "intern": [0, 1, 4], "interpret": [0, 1], "intro": 7, "introduct": 0, "inv": 3, "inv_l": 4, "inv_transform": 4, "involv": 0, "io": 7, "is_interact": [5, 6], "isbn": 7, "ish": 1, "issu": 7, "iter": 1, "itertool": 1, "its": [0, 5], "jax": 4, "jax_enable_x64": 4, "jitter": 4, "jochen": 7, "jupyt": 6, "jupyterbook": [6, 7], "jupytext": 6, "just": [1, 7], "k": [0, 3, 4, 5, 7], "k1": [0, 1, 5], "k1__length_scal": 0, "k1__length_scale_bound": 0, "k2": [0, 1, 5], "k2__noise_level": 0, "k2__noise_level_bound": 0, "k_": 0, "k_pp": 3, "k_pp_nois": 3, "k_pt": 3, "k_tt": 3, "k_tt_nois": 3, "kanagawa": 7, "kappa": [0, 7], "kehlbeck": 7, "kern": [3, 4], "kernel": [1, 3, 4, 5, 7], "kernel_": [0, 1, 5], "kernel_kwd": 3, "kernel_ridg": [0, 1], "kernelridg": 1, "kevin": 7, "kfold": [0, 1], "khss18": 7, "kp": 1, "krr": 7, "kwd": [1, 3], "l_bfgs_b": 0, "label": [1, 5], "lambda": [1, 7], "larg": 0, "larger": 5, "latter": 1, "lead": 2, "learn": [0, 1, 2, 7], "least": [0, 5], "leav": 0, "leavepout": 0, "left": 7, "legend": [1, 5], "len": [1, 5], "length": [0, 1, 7], "length_scal": [0, 1, 3, 4, 5, 7], "length_scale_bound": [1, 5], "lengthscal": 4, "lengthscale_constraint": 4, "level": [1, 7], "librari": [2, 7], "licens": 7, "like": [0, 1, 4, 5, 7], "likelihood": [0, 4, 7], "linalg": 3, "linalg_dtyp": 4, "line": 6, "linear": 1, "linspac": [1, 5], "list": [1, 7], "live": [0, 1], "lmap": 5, "lml": [0, 1, 5], "loc": [1, 4, 5], "local": [0, 1, 4], "log": [0, 1, 4], "log10": 1, "log_": 1, "log_marginal_likelihood": 1, "log_prob": 4, "lognorm": 1, "logo": 5, "logscal": [0, 1], "logspac": 1, "longer": 0, "look": 1, "low": 1, "lower": 1, "luo": 7, "lurk": 4, "lvert": 7, "lw": [1, 5], "m": [1, 5], "ma": [0, 1, 2, 5], "machin": 7, "mai": 4, "make": 5, "mani": [0, 1], "map": 1, "marc": 7, "margin": [0, 4], "mark": 7, "masked_wher": 1, "materi": 7, "mathbb": [4, 5], "mathrm": 5, "matplotlib": [1, 5, 6], "matrix": [0, 1, 2, 4, 5], "max": [1, 5], "maxim": [0, 5], "maxit": 1, "md": 6, "mean": [0, 1, 4], "mean_modul": 4, "mean_squared_error": 1, "measur": 1, "mention": 0, "meshgrid": 1, "method": 7, "metric": [1, 3], "middl": 1, "might": [0, 4], "min": [0, 1, 5], "mit": 7, "model": [1, 2, 4], "model_evalu": 1, "model_select": 1, "modul": 1, "more": [0, 4], "most": 5, "motonobu": 7, "mp": 1, "mse": 1, "mu": 5, "much": 1, "multiprocess": 1, "multivariate_norm": 3, "multivariatenorm": 4, "mur22": [5, 7], "murphi": 7, "must": [1, 4], "my_optim": 0, "n": 5, "n_restarts_optim": [0, 1, 5], "n_sampl": 3, "n_split": 1, "name": [1, 2, 4, 5], "natur": 0, "ncol": [1, 5], "ndarrai": 5, "ndim": [1, 5], "need": [0, 1, 4, 6], "neg": 1, "neg_": 1, "neg_mean_squared_error": 1, "negat": 1, "neighborhood": 0, "neq": 1, "netlifi": 7, "new": 7, "next": 0, "nice": [0, 1], "nlevel": 1, "no_grad": 4, "nois": [1, 4, 5, 7], "noise_constraint": 4, "noise_level": [0, 1, 3, 4, 5, 7], "noise_level_bound": [1, 5], "noise_var": 4, "noiseless": [2, 3], "noisi": [2, 7], "nolog": 1, "non": [0, 1], "none": [0, 1, 4, 5], "nope": 1, "norm": 1, "normal": [1, 4, 6], "normalize_i": [0, 1, 4, 5], "notat": 7, "note": [0, 1, 3, 4, 6], "notebook": 6, "notic": 5, "notimplementederror": 1, "now": 5, "np": [1, 3, 4, 5], "nrow": [1, 5], "nsampl": 1, "numer": 4, "numpi": [1, 3, 4, 5], "o": [1, 4, 5], "obj_func": 1, "obtain": 4, "off": 1, "offset": 0, "oliv": 7, "onc": 0, "one": [0, 1, 5], "ones": 5, "onli": [0, 1, 3, 4, 5], "onlin": 7, "open": 5, "oper": 1, "opt": [0, 1], "opt_result": 1, "optim": [4, 5], "optima": 0, "optimum": 4, "orang": 5, "org": [0, 1, 7], "orthogon": 4, "other": [0, 3], "otherwis": 7, "our": [5, 7], "out": 0, "out_scal": [1, 5], "outsid": 6, "over": [0, 7], "own": 7, "p": [0, 1, 5, 7], "param": [0, 1, 4], "paramet": [0, 1, 7], "params_gp_0": 1, "params_gp_1": 1, "params_gp_2": 1, "params_gp_3": 1, "params_gp_3_nolog": 1, "params_krr": 1, "params_krr_nolog": 1, "params_opt": 1, "params_transform": 1, "part": [0, 1, 3, 6], "partial": [3, 5], "particular": 0, "pass": 6, "path": [0, 1, 4], "pdf": 1, "per": 1, "perform": [0, 4, 5], "peter": 7, "philipp": 7, "pickl": 1, "pl2d": 1, "pl3d": 1, "plai": 7, "plateau": [0, 1], "playground": 7, "pleas": 1, "plot": [0, 5, 6], "plot_gp": 5, "plot_gp_post": 5, "plot_surfac": 1, "plt": [1, 5, 6], "pm": [1, 5], "pml": 7, "pn": 5, "png": 5, "point": [0, 1], "polish": 1, "pool": 1, "popsiz": 1, "posit": 4, "possibl": 4, "post": [5, 7], "post_ref_func": 5, "posterior": [0, 2, 4, 7], "practic": [0, 4, 7], "precomput": 1, "pred_func": 4, "pred_mod": 5, "predict": [0, 2, 3, 4, 7], "predict_noiseless": [2, 3, 4, 5], "prefer": 0, "preprocess": [1, 5], "press": 7, "pri": 5, "pri_post": 5, "print": [1, 6], "prior": [2, 4, 7], "probabilist": 7, "probabl": [0, 4], "problem": 0, "probml": 7, "process": 7, "produc": 0, "product": 1, "project": [1, 7], "pub": 7, "public": 7, "pyplot": [1, 5, 6], "qualiti": 0, "r": [0, 1, 2, 3, 4, 5], "radial": [0, 7], "rais": [1, 5], "rand": 4, "random": [1, 3, 4, 5], "random_st": [1, 3, 5], "randomli": 0, "randomst": 3, "rang": [1, 6], "rasmussen": 7, "rbf": [0, 1, 4, 5, 7], "rbf_gauss": 3, "rbfkernel": 4, "rcparam": [1, 5], "re": [1, 3, 7], "real": 5, "reason": 0, "rebecca": 7, "red": [1, 5], "refer": [1, 2, 4, 7], "region": 1, "regress": 7, "regular": [0, 1, 4, 7], "relat": 7, "render": 6, "replac": 0, "represent": 0, "reproduc": 1, "reshap": [1, 5], "resort": 0, "resourc": 7, "respons": 0, "result": [1, 4], "retain": 4, "return": [1, 3, 4, 5], "return_cov": [0, 4, 5], "return_param": 1, "return_std": [1, 4], "review": 7, "rf": 5, "rich": 1, "ridg": 7, "right": [5, 7], "rng": [0, 1, 3, 4, 5], "role": 7, "roll": 1, "rsq": 3, "rtol": [4, 5], "rule": 0, "run": [1, 6], "rvert_2": 7, "rw06": [0, 2, 4, 5, 7], "sadli": 1, "sai": 0, "same": [0, 1, 3, 4, 5], "sampl": [2, 3, 5], "sample_i": [3, 5], "samples_kind": 5, "saniti": 1, "savefig": [1, 5], "scale": [1, 4, 7], "scaler": [1, 5], "scheme": 2, "schmerler": 7, "schmerler_gpplayground": 7, "scikit": 1, "scipi": [0, 1, 3], "score": [0, 1], "scorer": 1, "script": 6, "search": 0, "section": [0, 7], "see": [0, 1, 5], "seed": [1, 3, 5], "sejdinov": 7, "select": [0, 7], "self": [1, 4], "serv": 4, "set": [0, 4, 5], "set_axis_off": 5, "set_default_dtyp": 4, "set_titl": [1, 5], "set_vis": 5, "set_xlabel": 1, "set_xscal": 1, "set_ylabel": 1, "set_ylim": [1, 5], "set_yscal": 1, "shape": [1, 3, 4, 5], "sharex": [1, 5], "should": 0, "show": [0, 1, 2, 5, 6], "showcas": 5, "shown": [2, 5, 6], "shuffl": 1, "sigma": [1, 5, 7], "sigma_n": [1, 2, 4, 5, 7], "simpl": 3, "simple_cv": 1, "sin": [1, 5], "sinc": [0, 1, 3, 4, 5], "size": [1, 4, 5], "skip": [1, 4], "sklearn": [0, 1, 2, 3, 5, 7], "sneak": 0, "so": [0, 1, 3, 4, 5], "solut": 0, "solv": [0, 3, 4], "solver": 4, "some": [4, 5], "someth": 0, "sometim": 0, "sort": [1, 5], "sourc": [5, 7], "space": 0, "spatial": 3, "specifi": 0, "split": 1, "sqeuclidean": 3, "sqrt": [3, 4, 5], "squar": [0, 7], "sriperumbudur": 7, "stabl": 1, "standard": 5, "standardscal": [1, 5], "start": [0, 1, 4], "state": 7, "std": 1, "std_color": 5, "stdlib": 1, "step": 0, "steve": 7, "still": [0, 1, 3, 5], "str": 5, "straight": 4, "stuck": [0, 1], "stuff": 6, "subplot": [1, 5, 6], "subplot_kw": 1, "subtitl": 7, "super": [0, 1, 4, 5], "surfac": 0, "sym": 3, "sym_solv": 3, "symeig": 4, "t": [0, 2, 3, 4, 5], "tab": [1, 5], "talk": 7, "target": 4, "technic": 0, "term": [0, 5], "test": [0, 1, 4, 5], "text": 5, "text_gp": 4, "text_po": 4, "text_pos_nois": 4, "text_pri": 4, "text_pri_nois": 4, "textbook": [0, 4, 5], "textbook_posterior": [3, 4, 5], "textbook_posterior_nois": [3, 4, 5], "textbook_prior": [3, 4, 5], "than": [1, 4], "thank": [5, 7], "thei": [0, 5], "them": [1, 4, 7], "therefor": [0, 1], "theta": [0, 1], "thi": [0, 1, 4, 5, 6, 7], "thing": 1, "thompson": 7, "those": 4, "though": 5, "threshold": 4, "thu": [0, 1, 5], "ticker": 1, "tinygp": 5, "titl": 7, "toi": 5, "tol": 1, "tool": 4, "top": 5, "topic": 7, "torch": 4, "tracker": 7, "trail": 0, "train": [4, 5], "transform": [0, 1, 4, 5], "transform_1d": [1, 5], "transform_label": 5, "translat": 3, "treat": 0, "tri": 4, "true": [0, 1, 4, 5], "truth": [1, 5], "try": 0, "tup": 1, "two": [0, 2], "typic": [0, 5], "uncertainti": 2, "under": 7, "underscor": 0, "uniform": [1, 4, 5], "unknown": 5, "unless": 7, "up": 0, "updat": [1, 4], "upper": [1, 5], "uqfound": 1, "url": 7, "us": [0, 1, 2, 3, 4, 5, 7], "usabl": 0, "usual": [4, 5], "v": [5, 7], "v1": 3, "val": [1, 4], "valid": 0, "valu": [0, 1, 4, 5], "valueerror": 5, "van": 7, "vari": [0, 1], "varianc": [4, 7], "variant": 0, "ve": [0, 2, 4, 5, 7], "veri": [0, 1], "version": [5, 7], "via": [0, 4], "view": 0, "view_init": 1, "viridi": 1, "visit": 7, "visual": [0, 1, 7], "w": [0, 2, 3, 4], "wa": 7, "wai": [0, 1], "wait": 0, "want": 0, "we": [0, 1, 2, 3, 4, 5, 7], "weight": [0, 5], "what": [0, 1, 3, 4, 5], "when": [0, 1, 2, 3, 4, 5, 6], "where": [0, 1, 2, 4], "which": [0, 1, 4, 5], "while": 0, "white": 1, "whitekernel": [1, 2, 3, 4, 5], "wide": 4, "wider": 1, "width": 0, "wild": 1, "wilk": 7, "william": 7, "without": 5, "work": [0, 1, 7], "worker": 1, "would": 0, "www": 7, "x": [0, 1, 3, 4, 5, 7], "x1": [1, 3], "x2": [1, 3], "x_": 5, "x_i": [0, 4, 5, 7], "x_j": [0, 7], "x_pred": [3, 4], "x_train": [3, 4], "xi": [1, 5], "xk": 1, "xspan": [1, 5], "y": [0, 1, 4, 5], "y_cov": [0, 3, 4, 5], "y_cov_ref": 5, "y_i": [4, 5], "y_lim": 5, "y_mean": [3, 4, 5], "y_mean_ref": 5, "y_pred": 0, "y_std": [0, 1, 3, 4, 5], "y_std_": 5, "y_std_label": 5, "y_std_p": 5, "y_std_p_color": 5, "y_std_pn": 5, "y_std_pn_color": 5, "y_std_ref": 5, "y_train": [3, 4], "yet": 1, "yi_gp": 1, "yi_gp_std": 1, "yi_gt": 1, "yi_krr": 1, "yicheng": 7, "yonder": 1, "you": [1, 5, 7], "yspan": 1, "yy": 5, "z": 1, "z_log": 1, "zenodo": 7, "zero": [0, 1, 3, 4], "zeromean": 4, "zmax": 1, "zz": 1}, "titles": ["Compare GPs and kernel ridge regression (KRR)", "Explore GPs and KRR with code", "The role of noise in GPs", "Reference implementation of RW06 equations", "Comparison of GP libraries", "Prior and (noisy) posterior predictions", "Test!!1!1!", "&lt;no title&gt;"], "titleterms": {"1": 6, "The": 2, "after": [0, 1], "ar": 0, "chang": 0, "check": 1, "code": 1, "compar": 0, "comparison": 4, "correct": 1, "covari": 0, "data": [0, 1], "differ": 0, "equat": 3, "exampl": [0, 1], "explor": 1, "function": [0, 1], "gaussianprocessregressor": 0, "gp": [0, 1, 2, 4], "gpy": 4, "gpytorch": 4, "helper": 1, "how": 1, "hyperopt": [0, 1], "hyperparamet": [0, 1], "implement": 3, "interpol": 5, "kernel": 0, "kernelridg": 0, "krr": [0, 1], "librari": 4, "model": 0, "nois": [0, 2], "noiseless": 5, "noisi": 5, "object": [0, 1], "optim": [0, 1], "plai": 1, "plot": 1, "posterior": 5, "predict": [1, 5], "prior": 5, "refer": 3, "regress": [0, 5], "result": 0, "ridg": 0, "role": 2, "rw06": 3, "scale": 0, "sklearn": 4, "test": 6, "tinygp": 4, "whitekernel": 0, "why": 0}})